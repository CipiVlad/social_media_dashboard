import faceBook from '../../public/images/icon-facebook.svg'
import twitter from '../../public/images/icon-twitter.svg'
import instagram from '../../public/images/icon-instagram.svg'
import youtube from '../../public/images/icon-youtube.svg'

import up from '../../public/images/icon-up.svg'
import down from '../../public/images/icon-down.svg'
export type FollowerListData = {
    coloredLine: string,
    icon: string,
    username: string,
    followers: string,
    ratingIcon: string,
    ratingNumber: number,
    ratingDay: string
}

export const FaceBookData: FollowerListData =
{
    coloredLine: '#1690f5',
    icon: faceBook,
    username: '@nathanf',
    followers: "1987",
    ratingIcon: up,
    ratingNumber: 12,
    ratingDay: 'Today'
}

export const TwitterData: FollowerListData =
{
    coloredLine: '#1ca3f5',
    icon: twitter,
    username: '@nathanf',
    followers: "1044",
    ratingIcon: up,
    ratingNumber: 99,
    ratingDay: 'Today'
}


export const InstagramData: FollowerListData =
{
    coloredLine: 'hsl(37, 97%, 70%)',
    // coloredLine: "hsl(37, 97%, 70%), hsl(329, 70%, 58%)",
    icon: instagram,
    username: '@realnathanf',
    followers: "11k",
    ratingIcon: up,
    ratingNumber: 1099,
    ratingDay: 'Today'
}


export const YouTubeData: FollowerListData =
{
    coloredLine: '#ff0000',
    icon: youtube,
    username: 'Nathan F.',
    followers: "8239",
    ratingIcon: down,
    ratingNumber: 144,
    ratingDay: 'Today'
}
