const Mutation = {
    createUser(parent, args, {
        prisma
    }) {
        // create a user with all the arguments passed in
        return prisma.createUser({
            ...args.data
        })
    }
}

export default Mutation