import { useIsFocused, useLinkTo } from "@react-navigation/native";
import { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectMyFollower, selectMyFollowing } from "../store/follows";
import { selectMyPost } from "../store/posts";

const ProfileScreen=()=>{
    const linkTo = useLinkTo();
    const {name,img} = useSelector((state)=>state.users.me);
    const myPosts = useSelector((state)=>state.posts.myPosts);
    const myFollowing = useSelector((state)=>state.follows.myFollowing);
    const myFollower = useSelector((state)=>state.follows.myFollower);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const selectMy =()=>{
        dispatch(selectMyFollower());
        dispatch(selectMyFollowing());
        dispatch(selectMyPost());
    };
    useEffect(()=>{
        selectMy();
    },[isFocused]);
    return (
        <View>
            <Text>{`name:${name}`}</Text>
            <Text>{`img:${img}`}</Text>
            
        </View>
    );
};

export default ProfileScreen;