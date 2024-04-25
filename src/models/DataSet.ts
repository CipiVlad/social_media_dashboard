import faceBook from '../../public/images/icon-facebook.svg'
import twitter from '../../public/images/icon-twitter.svg'
import instagram from '../../public/images/icon-instagram.svg'
import youtube from '../../public/images/icon-youtube.svg'

import up from '../../public/images/icon-up.svg'
import down from '../../public/images/icon-down.svg'

// data set for TotalFollower
export type FollowerListData = {
    coloredLine: string,
    icon: string,
    username: string,
    followers: string,
    ratingIcon: string,
    ratingNumber: number,
    ratingDay: string
    followerTitle: string
}

export const FaceBookData: FollowerListData =
{
    coloredLine: '#1690f5',
    icon: faceBook,
    username: '@nathanf',
    followers: "1987",
    ratingIcon: up,
    ratingNumber: 12,
    ratingDay: 'Today',
    followerTitle: "FOLLOWERS",
}

export const TwitterData: FollowerListData =
{
    coloredLine: '#1ca3f5',
    icon: twitter,
    username: '@nathanf',
    followers: "1044",
    ratingIcon: up,
    ratingNumber: 99,
    ratingDay: 'Today',
    followerTitle: "FOLLOWERS",
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
    ratingDay: 'Today',
    followerTitle: "FOLLOWERS",
}


export const YouTubeData: FollowerListData =
{
    coloredLine: '#ff0000',
    icon: youtube,
    username: 'Nathan F.',
    followers: "8239",
    ratingIcon: down,
    ratingNumber: 144,
    ratingDay: 'Today',
    followerTitle: "SUBSCRIBERS",
}


// data set for FollowerToday

export type FollowerTodayData = {
    title: string,
    icon: string,
    number: string,
    ratingIcon: string
    ratingNumber: string
}

export const FollowerTodayDataList: FollowerTodayData[] = [

    {
        title: "Page Views",
        icon: faceBook,
        number: "87",
        ratingIcon: up,
        ratingNumber: "3%",
    },
    {
        title: "Likes",
        icon: faceBook,
        number: "52",
        ratingIcon: down,
        ratingNumber: "2%",
    },
    {
        title: "Likes",
        icon: instagram,
        number: "5462",
        ratingIcon: up,
        ratingNumber: "2257%",
    },
    {
        title: "Profile Views",
        icon: instagram,
        number: "52k",
        ratingIcon: up,
        ratingNumber: "1375%",
    },
    {
        title: "Retweets",
        icon: twitter,
        number: "117",
        ratingIcon: up,
        ratingNumber: "303%",
    },
    {
        title: "Likes",
        icon: twitter,
        number: "507",
        ratingIcon: up,
        ratingNumber: "553%",
    },
    {
        title: "Likes",
        icon: youtube,
        number: "107",
        ratingIcon: down,
        ratingNumber: "19%",
    },
    {
        title: "Total Views",
        icon: youtube,
        number: "1407",
        ratingIcon: down,
        ratingNumber: "12%",
    }
]