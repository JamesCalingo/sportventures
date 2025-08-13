import GridItem from "./GridItem";
import PinnedItem from "./PinnedItem";

function PostList(props) {
    const { posts, pinned } = props;

    if (!posts || !posts.length) return <p>Nothing to see here...</p>;

    const id = pinned ? "pinned-list" : "posts-list";

    return (
        <div id={id}>

            {posts
                //TODO: paginate this list
                .map((post, index) => {
                    const { frontmatter, slug } = post;
                    const { display, date, } = frontmatter;

                    return pinned ? <PinnedItem key={index} slug={slug} display={display} date={date} /> : (<GridItem key={index} slug={slug} display={display} date={date} />
                    );
                })}

        </div>
    );
};

export default PostList