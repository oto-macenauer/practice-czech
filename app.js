/* ===== State ===== */
var state = {
  testId: null,
  currentSection: 0,
  answers: {},   // "sectionIdx-itemIdx" -> answer value
  checked: {},   // "sectionIdx-itemIdx" -> true after feedback shown
  activeTest: null, // randomized snapshot of the test
  renderedSection: -1 // tracks which section was last rendered (for entry animation)
};

/* ===== Router ===== */
function navigate(hash) {
  window.location.hash = hash;
}

function route() {
  var hash = window.location.hash || "#/";
  var parts = hash.replace("#/", "").split("/");
  var view = parts[0] || "";
  var testId = parts[1] || null;

  document.querySelectorAll(".view").forEach(function(v) { v.classList.add("hidden"); });

  if (view === "practice" && testId) {
    showPractice(testId);
  } else if (view === "print" && testId) {
    showPrint(testId);
  } else if (view === "results" && testId) {
    showResults(testId);
  } else {
    showHome();
  }
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);

/* ===== Helpers ===== */
function getTest(id) {
  for (var i = 0; i < window.TESTS.length; i++) {
    if (window.TESTS[i].id === id) return window.TESTS[i];
  }
  return null;
}

function answerKey(sIdx, iIdx) {
  return sIdx + "-" + iIdx;
}

function el(tag, cls, html) {
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

/* Shuffle array in place (Fisher-Yates) */
function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr;
}

/* Build a randomized snapshot of a test: pick N items per section, shuffle order */
function buildActiveTest(test) {
  var active = {
    id: test.id,
    title: test.title,
    grade: test.grade,
    sections: []
  };

  test.sections.forEach(function(section) {
    var sec = {};
    for (var k in section) { sec[k] = section[k]; }

    // Reading comprehension: pick one random passage
    if (section.type === "reading-comprehension" && section.passages) {
      var chosen = section.passages[Math.floor(Math.random() * section.passages.length)];
      sec.passage = chosen.passage;
      sec.items = chosen.items.slice();
      delete sec.passages;
    }

    // Pick N random items if pick is set and pool is larger
    if (sec.pick && sec.items && sec.items.length > sec.pick) {
      var pool = sec.items.slice();
      shuffle(pool);
      sec.items = pool.slice(0, sec.pick);
    } else if (sec.items) {
      sec.items = sec.items.slice();
    }

    // Shuffle the selected items
    if (sec.items) {
      shuffle(sec.items);
    }

    active.sections.push(sec);
  });

  return active;
}

/* ===== Home ===== */
function showHome() {
  document.getElementById("view-home").classList.remove("hidden");
  var list = document.getElementById("test-list");
  list.innerHTML = "";

  window.TESTS.forEach(function(test) {
    var card = el("div", "test-card");
    var sectionNames = test.sections.map(function(s) { return s.title; }).join(", ");
    card.innerHTML =
      '<h2>' + test.title + '</h2>' +
      '<div class="test-sections">' + test.grade + ' &middot; ' + sectionNames + '</div>' +
      '<div class="test-card-actions">' +
        '<button class="btn btn-primary" onclick="navigate(\'#/practice/' + test.id + '\')">Procvičovat</button>' +
        '<button class="btn btn-secondary" onclick="navigate(\'#/print/' + test.id + '\')">Vytisknout test</button>' +
      '</div>';
    list.appendChild(card);
  });
}

/* ===== Practice Mode ===== */
function showPractice(testId) {
  var test = getTest(testId);
  if (!test) return;

  // Reset state and build randomized snapshot if new test
  if (state.testId !== testId || !state.activeTest) {
    state.testId = testId;
    state.currentSection = 0;
    state.answers = {};
    state.checked = {};
    state.renderedSection = -1;
    state.activeTest = buildActiveTest(test);
  }

  document.getElementById("view-practice").classList.remove("hidden");
  document.getElementById("practice-title").textContent = state.activeTest.title;
  renderPracticeSection(state.activeTest);
}

function renderPracticeSection(test) {
  var sIdx = state.currentSection;
  var section = test.sections[sIdx];
  var isNewSection = (state.renderedSection !== sIdx);
  state.renderedSection = sIdx;
  var container = document.getElementById("practice-content");
  container.innerHTML = "";

  // Progress
  var pct = ((sIdx) / test.sections.length) * 100;
  document.querySelector(".progress-fill").style.width = pct + "%";

  // Section title
  document.getElementById("practice-section-title").textContent = section.title;

  // Section indicator
  document.getElementById("section-indicator").textContent = (sIdx + 1) + " / " + test.sections.length;

  // Nav buttons
  document.getElementById("btn-prev").style.visibility = sIdx === 0 ? "hidden" : "visible";
  var isLast = sIdx === test.sections.length - 1;
  var nextBtn = document.getElementById("btn-next");
  nextBtn.textContent = isLast ? "Vyhodnotit" : "Další \u2192";
  nextBtn.className = isLast ? "btn btn-success" : "btn btn-primary";

  // Instructions
  if (section.instructions) {
    var instrEl = el("p", "question-block", '<em>' + section.instructions + '</em>');
    container.appendChild(instrEl);
  }

  // Render by type
  if (section.type === "fill-choice") renderFillChoice(container, section, sIdx);
  else if (section.type === "syllable-split") renderSyllableSplit(container, section, sIdx);
  else if (section.type === "match-pair") renderMatchPair(container, section, sIdx);
  else if (section.type === "word-order") renderWordOrder(container, section, sIdx);
  else if (section.type === "reading-comprehension") renderReadingComprehension(container, section, sIdx);

  // Entry animation only on section change, not on answer re-render
  if (isNewSection) {
    container.querySelectorAll(".question-block").forEach(function(b) {
      b.classList.add("animate-in");
    });
  }
}

/* ----- Fill Choice (i/y, u/ů/ú) ----- */
function renderFillChoice(container, section, sIdx) {
  section.items.forEach(function(item, iIdx) {
    var block = el("div", "question-block");
    var key = answerKey(sIdx, iIdx);
    var answered = state.answers[key];
    var checked = state.checked[key];

    // Build the word display with gap
    var gapText = answered || "_";
    var gapClass = "gap-highlight";
    if (checked) {
      gapClass += answered === item.correct ? " correct" : " wrong";
      gapText = item.correct;
    }

    block.innerHTML =
      '<div class="question-number">' + (iIdx + 1) + '.</div>' +
      '<div class="question-text">' + item.before + '<span class="' + gapClass + '">' + gapText + '</span>' + item.after + '</div>';

    var choices = el("div", "choices");
    item.choices.forEach(function(ch) {
      var btn = el("button", "choice-btn", ch);
      if (answered === ch && !checked) btn.classList.add("selected");
      if (checked) {
        if (ch === item.correct) btn.classList.add("correct");
        else if (ch === answered && answered !== item.correct) btn.classList.add("wrong");
      }
      btn.onclick = function() {
        if (checked) return;
        state.answers[key] = ch;
        state.checked[key] = true;
        renderPracticeSection(state.activeTest);
      };
      choices.appendChild(btn);
    });

    block.appendChild(choices);
    container.appendChild(block);
  });
}

/* ----- Syllable Split ----- */
function renderSyllableSplit(container, section, sIdx) {
  section.items.forEach(function(item, iIdx) {
    var block = el("div", "question-block");
    var key = answerKey(sIdx, iIdx);
    var answered = state.answers[key];
    var checked = state.checked[key];

    block.innerHTML =
      '<div class="question-number">' + (iIdx + 1) + '.</div>' +
      '<div class="question-text"><strong>' + item.word + '</strong></div>';

    var choices = el("div", "choices");
    item.choices.forEach(function(ch, ci) {
      var btn = el("button", "choice-btn", ch);
      if (answered === ci && !checked) btn.classList.add("selected");
      if (checked) {
        if (ci === item.correct) btn.classList.add("correct");
        else if (ci === answered && answered !== item.correct) btn.classList.add("wrong");
      }
      btn.onclick = function() {
        if (checked) return;
        state.answers[key] = ci;
        state.checked[key] = true;
        renderPracticeSection(state.activeTest);
      };
      choices.appendChild(btn);
    });

    block.appendChild(choices);
    container.appendChild(block);
  });
}

/* ----- Match Pair (synonyms/antonyms) ----- */
function renderMatchPair(container, section, sIdx) {
  section.items.forEach(function(item, iIdx) {
    var block = el("div", "question-block");
    var key = answerKey(sIdx, iIdx);
    var answered = state.answers[key];
    var checked = state.checked[key];

    block.innerHTML =
      '<div class="question-number">' + (iIdx + 1) + '.</div>' +
      '<div class="question-text"><strong>' + item.word + '</strong> &rarr; ?</div>';

    var choices = el("div", "choices");
    item.choices.forEach(function(ch, ci) {
      var btn = el("button", "choice-btn", ch);
      if (answered === ci && !checked) btn.classList.add("selected");
      if (checked) {
        if (ci === item.correct) btn.classList.add("correct");
        else if (ci === answered && answered !== item.correct) btn.classList.add("wrong");
      }
      btn.onclick = function() {
        if (checked) return;
        state.answers[key] = ci;
        state.checked[key] = true;
        renderPracticeSection(state.activeTest);
      };
      choices.appendChild(btn);
    });

    block.appendChild(choices);
    container.appendChild(block);
  });
}

/* ----- Word Order ----- */
function renderWordOrder(container, section, sIdx) {
  section.items.forEach(function(item, iIdx) {
    var block = el("div", "question-block");
    var key = answerKey(sIdx, iIdx);
    var checked = state.checked[key];

    // Initialize answer array if needed
    if (!state.answers[key]) {
      state.answers[key] = [];
    }
    var placed = state.answers[key];

    block.innerHTML = '<div class="question-number">' + (iIdx + 1) + '.</div>';

    // Answer area
    var ansLabel = el("div", "word-answer-label", "Tvoje věta:");
    block.appendChild(ansLabel);
    var answerArea = el("div", "word-answer");

    if (checked) {
      var builtSentence = placed.join(" ");
      // Add period if the correct answer ends with one
      if (item.correct.endsWith(".") && !builtSentence.endsWith(".")) {
        builtSentence += ".";
      }
      var isCorrect = builtSentence === item.correct;
      answerArea.style.borderColor = isCorrect ? "var(--color-correct)" : "var(--color-wrong)";
      answerArea.style.background = isCorrect ? "var(--color-success-light)" : "var(--color-danger-light)";
      if (!isCorrect) {
        var correctLabel = el("div", "", '<br><strong>Správně:</strong> ' + item.correct);
        block.appendChild(answerArea);
        block.appendChild(correctLabel);
      }
    }

    placed.forEach(function(w, wi) {
      var chip = el("div", "word-chip in-answer", w);
      if (!checked) {
        chip.onclick = function() {
          state.answers[key].splice(wi, 1);
          renderPracticeSection(state.activeTest);
        };
      }
      answerArea.appendChild(chip);
    });
    block.appendChild(answerArea);

    // Word bank
    if (!checked) {
      var bankLabel = el("div", "word-answer-label", "Slova:");
      block.appendChild(bankLabel);
      var bank = el("div", "word-bank");
      item.shuffled.forEach(function(w) {
        var isPlaced = false;
        var tempPlaced = placed.slice();
        for (var pi = 0; pi < tempPlaced.length; pi++) {
          if (tempPlaced[pi] === w) { isPlaced = true; tempPlaced.splice(pi, 1); break; }
        }
        var chip = el("div", "word-chip" + (isPlaced ? " placed" : ""), w);
        if (!isPlaced) {
          chip.onclick = function() {
            state.answers[key].push(w);
            // Auto-check if all words placed
            if (state.answers[key].length === item.shuffled.length) {
              state.checked[key] = true;
            }
            renderPracticeSection(state.activeTest);
          };
        }
        bank.appendChild(chip);
      });
      block.appendChild(bank);
    }

    container.appendChild(block);
  });
}

/* ----- Reading Comprehension ----- */
function renderReadingComprehension(container, section, sIdx) {
  var passage = el("div", "reading-passage", section.passage);
  container.appendChild(passage);

  section.items.forEach(function(item, iIdx) {
    var block = el("div", "question-block");
    var key = answerKey(sIdx, iIdx);
    var answered = state.answers[key];
    var checked = state.checked[key];

    block.innerHTML =
      '<div class="question-number">' + (iIdx + 1) + '.</div>' +
      '<div class="question-text">' + item.question + '</div>';

    var choices = el("div", "choices");
    item.choices.forEach(function(ch, ci) {
      var btn = el("button", "choice-btn", ch);
      if (answered === ci && !checked) btn.classList.add("selected");
      if (checked) {
        if (ci === item.correct) btn.classList.add("correct");
        else if (ci === answered && answered !== item.correct) btn.classList.add("wrong");
      }
      btn.onclick = function() {
        if (checked) return;
        state.answers[key] = ci;
        state.checked[key] = true;
        renderPracticeSection(state.activeTest);
      };
      choices.appendChild(btn);
    });

    block.appendChild(choices);
    container.appendChild(block);
  });
}

/* ===== Section Navigation ===== */
function nextSection() {
  var test = state.activeTest;
  if (!test) return;
  if (state.currentSection < test.sections.length - 1) {
    state.currentSection++;
    renderPracticeSection(test);
    window.scrollTo(0, 0);
  } else {
    navigate("#/results/" + state.testId);
  }
}

function prevSection() {
  if (state.currentSection > 0) {
    state.currentSection--;
    renderPracticeSection(state.activeTest);
    window.scrollTo(0, 0);
  }
}

/* ===== Results ===== */
function showResults(testId) {
  var test = state.activeTest;
  if (!test) return;

  document.getElementById("view-results").classList.remove("hidden");
  var container = document.getElementById("results-content");
  container.innerHTML = "";

  var totalCorrect = 0;
  var totalItems = 0;
  var sectionResults = [];

  test.sections.forEach(function(section, sIdx) {
    var correct = 0;
    var count = section.items.length;

    section.items.forEach(function(item, iIdx) {
      var key = answerKey(sIdx, iIdx);
      var answer = state.answers[key];
      totalItems++;

      if (section.type === "fill-choice") {
        if (answer === item.correct) { correct++; totalCorrect++; }
      } else if (section.type === "syllable-split" || section.type === "match-pair" || section.type === "reading-comprehension") {
        if (answer === item.correct) { correct++; totalCorrect++; }
      } else if (section.type === "word-order") {
        var built = (answer || []).join(" ");
        if (item.correct.endsWith(".") && !built.endsWith(".")) built += ".";
        if (built === item.correct) { correct++; totalCorrect++; }
      }
    });

    sectionResults.push({ title: section.title, correct: correct, count: count });
  });

  var pct = totalItems > 0 ? Math.round((totalCorrect / totalItems) * 100) : 0;
  var gradeClass = pct >= 75 ? "good" : pct >= 50 ? "ok" : "poor";

  container.innerHTML =
    '<h2>' + test.title + '</h2>' +
    '<div class="results-score ' + gradeClass + '">' + pct + '%</div>' +
    '<p>' + totalCorrect + ' z ' + totalItems + ' správně</p>';

  var sectionsDiv = el("div", "results-sections");
  sectionResults.forEach(function(sr) {
    var row = el("div", "results-section-row");
    row.innerHTML =
      '<span>' + sr.title + '</span>' +
      '<span class="results-section-score">' + sr.correct + '/' + sr.count + '</span>';
    sectionsDiv.appendChild(row);
  });
  container.appendChild(sectionsDiv);

  // Retry button
  var retryBtn = el("button", "btn btn-primary", "Zkusit znovu");
  retryBtn.style.marginTop = "16px";
  retryBtn.onclick = function() {
    state.answers = {};
    state.checked = {};
    state.currentSection = 0;
    state.renderedSection = -1;
    state.activeTest = buildActiveTest(getTest(testId));
    navigate("#/practice/" + testId);
  };
  container.appendChild(retryBtn);
}

/* ===== Print Mode ===== */
function showPrint(testId) {
  var test = getTest(testId);
  if (!test) return;

  // Build a fresh randomized version for each print
  var printTest = buildActiveTest(test);

  document.getElementById("view-print").classList.remove("hidden");
  document.getElementById("print-title").textContent = printTest.title;
  var container = document.getElementById("print-content");
  container.innerHTML = "";

  // Header
  container.innerHTML =
    '<h2>' + printTest.title + '</h2>' +
    '<div class="print-name-date">' +
      '<div>Jméno: <span>&nbsp;</span></div>' +
      '<div>Datum: <span>&nbsp;</span></div>' +
      '<div>Třída: <span>&nbsp;</span></div>' +
    '</div>';

  var questionNum = 1;

  printTest.sections.forEach(function(section, sIdx) {
    var sec = el("div", "print-section");
    sec.innerHTML = '<h3>' + section.title + '</h3>';
    if (section.instructions) {
      sec.innerHTML += '<p><em>' + section.instructions + '</em></p><br>';
    }

    if (section.type === "fill-choice") {
      section.items.forEach(function(item, iIdx) {
        var div = el("div", "print-item");
        div.innerHTML =
          '<span class="print-number">' + questionNum + '.</span> ' +
          item.before + ' <span class="print-blank">&nbsp;&nbsp;&nbsp;&nbsp;</span> ' + item.after +
          '  <small>(' + item.choices.join(', ') + ')</small>';
        sec.appendChild(div);
        questionNum++;
      });
    }

    else if (section.type === "syllable-split") {
      section.items.forEach(function(item) {
        var div = el("div", "print-item");
        div.innerHTML =
          '<span class="print-number">' + questionNum + '.</span> ' +
          '<strong>' + item.word + '</strong> &rarr; <span class="print-blank" style="min-width:150px">&nbsp;</span>';
        sec.appendChild(div);
        questionNum++;
      });
    }

    else if (section.type === "match-pair") {
      // Print as a matching exercise: left column = words, right column = shuffled answers
      var wordsCol = section.items.map(function(item, i) {
        return String.fromCharCode(65 + i) + ') ' + item.word;
      });
      var answersCol = section.items.map(function(item) {
        return item.choices[item.correct];
      });
      // Shuffle the answers for print
      for (var i = answersCol.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = answersCol[i]; answersCol[i] = answersCol[j]; answersCol[j] = temp;
      }
      var numberedAnswers = answersCol.map(function(a, i) { return (i + 1) + '. ' + a; });

      sec.innerHTML += '<p><em>Spoj slova, která k sobě patří.</em></p><br>';
      var cols = el("div", "print-match-columns");
      var leftCol = el("ul", "print-match-column");
      wordsCol.forEach(function(w) { leftCol.innerHTML += '<li>' + w + ' ___</li>'; });
      var rightCol = el("ul", "print-match-column");
      numberedAnswers.forEach(function(a) { rightCol.innerHTML += '<li>' + a + '</li>'; });
      cols.appendChild(leftCol);
      cols.appendChild(rightCol);
      sec.appendChild(cols);
    }

    else if (section.type === "word-order") {
      section.items.forEach(function(item) {
        var div = el("div", "print-item");
        div.innerHTML =
          '<span class="print-number">' + questionNum + '.</span> ' +
          item.shuffled.join(' &nbsp;/&nbsp; ') +
          '<div class="print-line"></div>';
        sec.appendChild(div);
        questionNum++;
      });
    }

    else if (section.type === "reading-comprehension") {
      sec.innerHTML += '<div class="print-passage">' + section.passage + '</div>';
      section.items.forEach(function(item) {
        var div = el("div", "print-item");
        div.innerHTML =
          '<span class="print-number">' + questionNum + '.</span> ' +
          item.question +
          '<div class="print-line"></div>';
        sec.appendChild(div);
        questionNum++;
      });
    }

    container.appendChild(sec);
  });
}
