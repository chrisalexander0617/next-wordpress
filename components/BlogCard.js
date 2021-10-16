import React from 'react';

export default function BlogCard(props){
    return (
        <>
            <div>{props.title}</div>
            <html>{props.excerpt}</html>
        </>
    )
}