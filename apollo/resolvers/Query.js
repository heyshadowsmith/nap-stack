const Query = {
    // prisma destructured off the context object
    user(parent, args, {
        prisma
    }) {
        // return single user by id that's passed in
        return prisma.user({
            id: args.id
        })
    },
    users(parent, args, {
        prisma
    }) {
        // return all users
        return prisma.users()
    }
}

export default Query