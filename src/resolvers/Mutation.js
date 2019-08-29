function createPost (parent, args, context) {
  return context.prisma.createPost({
    title: args.title,
    content: args.content
  });
}

function updatePost (parent, args, context) {
  return context.prisma.updatePost({
    data: {
      title: args.title,
      content: args.content
    },
    where: {
      id: args.id
    }
  });
},
function deletePost (parent, args, context) {
  return context.prisma.deletePost({
    id: args.id
  });
}