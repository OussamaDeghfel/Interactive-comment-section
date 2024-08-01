const useComment = () => {

    const insertComment = function (tree, commentId, item) {
        if(tree.id === commentId) {
            tree.comments.push({
                id: new Date().getTime(),
                content: item,
                items :[]
            })

            return tree
        }

        let latestNode = [];
        latestNode = tree.items.map((object) => {
            return insertComment(object, commentId, item)
        })

        return {...item, items:latestNode}
    }

    return {insertComment}
}

export default useComment