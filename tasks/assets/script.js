$(function () {
  $('.task__code').each((index, block) => {
    hljs.highlightBlock(block);
  });

  const solution = $('.solution code');

  solution.append(`static void Main(string[] args) {<br>`);

  $('.task').each((index, block) => {
    block = $(block);

    if (block.hasClass('task_questions')) {
      block.prepend($(`<div class="task__begin">async void Questions() {</div>`));
      solution.append(`<br>  await Questions();`);
    } else if (block.hasClass('task_extras')) {
      block.prepend($(`<div class="task__begin">async void Extras() {</div>`));
      solution.append(`<br>  if (wantToLearnMore) {<br>`);
      solution.append(`    await Extras();<br>`);
      solution.append(`  }<br>`);
    } else {
      block.prepend($(`<div class="task__begin">async void Task${index.toString().padStart(2, '0')}() {</div>`));
      solution.append(`  await Task${index.toString().padStart(2, '0')}();`);
    }

    block.append($('<div class="task__end">}</div>'));
    solution.append(`<br>`);
  });

  solution.append(`  console.WriteLine('Congratulations!');<br>`);
  solution.append(`};`);

  hljs.highlightBlock(solution[0]);
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

header.onclick = function() {
  header.style.backgroundColor = 'rgb('+getRandomInt(0,255)+', '+getRandomInt(0,255)+', '+getRandomInt(0,255)+')';
};