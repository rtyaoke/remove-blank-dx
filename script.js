function remove() {
  const textarea_before = document.querySelector(".textarea--before");
  const textarea_after = document.querySelector(".textarea--after");
  const checkbox01 = document.getElementById("check01");
  const checkbox02 = document.getElementById("check02");
  const checkbox03 = document.getElementById("check03");
  const before_text = textarea_before.innerHTML;
  let after_text = before_text;

  if (checkbox01.checked) {
    after_text = remove_half_blank(after_text);
  }

  if (checkbox02.checked) {
    after_text = remove_full_blank(after_text);
  }

  // console.log(`before_text : ${before_text}`);
  // console.log(`after_text : ${after_text}`);
  textarea_after.innerHTML = after_text;
}

function remove_half_blank(input_str) {
  return input_str.replace(/ |&nbsp;/g, "");
}

function remove_full_blank(input_str) {
  return input_str.replace(/　/g, "");
}
