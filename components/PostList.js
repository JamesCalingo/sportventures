import GridItem from "./GridItem";
import NewestListItem from "./NewestListItem";

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
                    const { display, date, title, subtitle, pinned } = frontmatter;

                    return newest ? <NewestListItem key={index} slug={slug} display={display ? display: title } date={date} subtitle={subtitle} /> : (<GridItem key={index} slug={slug} display={display ? display: title} date={date} pinned={pinned} />
                    );
                })}

        </div>
    );
};

export default PostList