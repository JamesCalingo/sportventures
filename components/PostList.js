import GridItem from "./GridItem";
import PinnedItem from "./NewestListItem";

function PostList(props) {
    const { posts, newest } = props;

    if (!posts || !posts.length) return <p>Nothing to see here...</p>;

    const id = newest ? "newest-list" : "posts-list";

    return (
        <div id={id}>

            {posts
                //TODO: paginate this list
                .map((post, index) => {
                    const { frontmatter, slug } = post;
                    const { display, date, subtitle, pinned } = frontmatter;

                    return newest ? <PinnedItem key={index} slug={slug} display={display} date={date} subtitle={subtitle} /> : (<GridItem key={index} slug={slug} display={display} date={date} pinned={pinned} />
                    );
                })}

        </div>
    );
};

export default PostList