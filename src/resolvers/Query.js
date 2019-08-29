function posts(parent, args, context) {
  return context.prisma.posts();
}

function post (parent, args, context) {
  return context.prisma.post({
    id: args.id
  });
};

module.exports = {
  posts,
  post
}