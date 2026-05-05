document.querySelectorAll('[name^="entry"]').forEach(el => console.log(el.name, el.closest('.freebirdFormviewerComponentsQuestionBaseRoot')?.querySelector('[role="heading"]')?.textContent))

//2
const match = document.documentElement.innerHTML.match(/FB_PUBLIC_LOAD_DATA_ = (\[.*?\]);\s*<\/script>/s);
if (match) {
  const data = JSON.parse(match[1]);
  const questions = data[1][1];
  questions.forEach(q => {
    console.log("Question:", q[1]);
    console.log("Entry ID:", q[4][0][0]);
    console.log("---");
  });
}