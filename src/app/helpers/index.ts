export const saveComment = (id: number, comment: string) => {
  let comments = localStorage.comments;
  if (comments) {
    comments = JSON.parse(localStorage.comments);
    console.log(comments);
    if (comments[id]) {
      comments[id].push({
        id: comments[id].length,
        comment
      });
      return (localStorage.comments = JSON.stringify(comments));
    } else {
      comments[id] = [
        {
          id: 0,
          comment
        }
      ];
      return (localStorage.comments = JSON.stringify(comments));
    }
  } else {
    return (localStorage.comments = JSON.stringify({
      [id]: [
        {
          id: 0,
          comment
        }
      ]
    }));
  }
};

export const getCommentsForNodes = (id: number) => {
  let comments = localStorage.comments;
  if (comments) {
    comments = JSON.parse(localStorage.comments);
    return comments[id];
  }
  return [];
};

export const saveReply = (id: number, comment_id: number, reply: string) => {
  const comments = JSON.parse(localStorage.comments);
  console.log(id, comment_id, reply, comments);
  console.log(comments[id][comment_id].reply);
  if (comments[id][comment_id].reply) {
    comments[id][comment_id].reply.push({
      id: comments[id][comment_id].reply.length,
      reply
    });
    return (localStorage.comments = JSON.stringify(comments));
  } else {
    comments[id][comment_id].reply = [
      {
        id: 0,
        reply
      }
    ];
    return (localStorage.comments = JSON.stringify(comments));
  }
};
