import React, { useContext } from 'react';
import SearchParam from '../../stores/SearchParam';
import './CategoryBar.css';
const categoryImagePath = '/images/category/'

function CategoryItem(props) {
    const searchParamCtx=props.searchParamCtx;
    const style = {background: 'var(--yellow)'};

    return (
        <a href={props.href} id={props.data.id} onClick={()=>{
                searchParamCtx.setName("");
                searchParamCtx.clearFilter();
                searchParamCtx.addFilter('category',props.data.text);
            }
        } class="box" style={props.data.text in props.checkCate?style:{}}  >
            <img src={categoryImagePath + props.data.src} alt={props.data.children}/>
            <h3>{props.children}</h3>
        </a>
    );
}

function CategoryBar(props) {
    const searchParamCtx = useContext(SearchParam);

    const cateList=[
        {
            src:'cat-1.png' ,
            text: 'combo',
        },
        {
            src:'cat-2.png',
            text: 'pizza'
        },
        {
            src:'cat-3.png',
            text: 'hamburger',
        },
        {
            src:'cat-4.png',
            text: 'chicken',
        },
        {
            src:'cat-5.png',
            text: 'desert',
        },
        {
            src:'cat-6.png',
            text: 'drink',
        }
    ];

    const checkCate={};
    searchParamCtx.param.forEach((p)=>{
        if (p[0]==='category') checkCate[p[1]]=1;
    });
    
    return (
        <section class="category" id = "category">
            <h1 class="title"> our <span>category</span></h1>
            <div class="box-container">
                {cateList.map((item)=>
                {
                   return <CategoryItem data={item} href="#" checkCate={checkCate} searchParamCtx={searchParamCtx}> {item.text} </CategoryItem>
                })}
            </div>
        </section>
    );
}

export default CategoryBar;