import {get} from 'axios'
export function getCommentList ()
{
	 return get('https://jsonplaceholder.typicode.com/comments')
}


