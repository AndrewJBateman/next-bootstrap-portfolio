import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { posts } from '../data';

const Post = () => {
	const router = useRouter();

  // filter out the post with a title that matches the one clicked on
	const currentPost = posts.filter(
		(post) => post.title === router.query.title
	)[0];
  console.log('post: ', currentPost);

	return (
		<Layout title={router.query.title} footer={false}>
			<div className="text-center">
				<img
					src={currentPost.imageURL}
					alt=""
					style={{ width: '50%' }}
					className="img-fluid"
				/>
				<p className="p-4">{currentPost.content}</p>
			</div>
		</Layout>
	);
};

export default Post;