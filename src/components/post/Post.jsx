import React, { useState } from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../dummyData';

const Post = ({ post }) => {
    const [like, setLike] = useState(post?.like)
    const [liked, setIsLiked] = useState(false);

    const ClickLiked = () => {
        setLike(liked ? like - 1 : like + 1)
        setIsLiked(!liked)
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={Users.filter((u) => u?.id === post?.userId)[0]?.profilePicture} alt="" />
                        <span className="postUsername">
                            {Users.filter((u) => u?.id === post?.userId)[0]?.username}
                        </span>
                        <span className="postDate">{post?.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={post?.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" onClick={ClickLiked} alt="" />
                        <img className='likeIcon' src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post?.comment}9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
