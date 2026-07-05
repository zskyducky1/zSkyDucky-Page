const commentForm = document.querySelector(".box-comment");
const nicknameInput = commentForm.querySelector('input[type="nickname"]');
const commentTextarea = document.querySelector("#comment-text");
const commentContainer = document.querySelector(".avaliacao");

function createCommentElement(nickname, text) {
  const newComment = document.createElement("div");
  newComment.className = "session-comment";

  const nicknameElement = document.createElement("h4");
  nicknameElement.textContent = nickname;

  const commentElement = document.createElement("p");
  commentElement.textContent = text;

  newComment.appendChild(nicknameElement);
  newComment.appendChild(commentElement);

  return newComment;
}

function loadSavedComments() {
  const savedComments = JSON.parse(
    localStorage.getItem("yourNameComments") || "[]"
  );

  savedComments.forEach((comment) => {
    const commentElement = createCommentElement(comment.nickname, comment.text);
    commentContainer.appendChild(commentElement);
  });
}

function saveComment(nickname, text) {
  const savedComments = JSON.parse(
    localStorage.getItem("yourNameComments") || "[]"
  );
  savedComments.push({ nickname, text });
  localStorage.setItem("yourNameComments", JSON.stringify(savedComments));
}

loadSavedComments();

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nickname = nicknameInput.value.trim();
  const commentText = commentTextarea.value.trim();

  if (nickname === "" || commentText === "") {
    alert("Por favor, preencha o nickname e o comentário.");
    return;
  }

  const newComment = createCommentElement(nickname, commentText);
  commentContainer.appendChild(newComment);

  saveComment(nickname, commentText);

  nicknameInput.value = "";
  commentTextarea.value = "";
});
