import React from 'react';
import { Link } from 'react-router-dom';

const CardBoxSmall = ({ title, moreUrl, data }) => {
    return (
        <section className="my-4">
            { title ?
            <div className="flex justify-between mb-4 ">
                <h4 className=" font-bold text-text-dark">{title}</h4>
                {
                    moreUrl ?
                    <Link to={moreUrl} className="text-primary font-bold ">See all <i className="ml-2 fas fa-chevron-right"></i></Link>
                    : ""
                }
            </div>
            : ""
            }
            <div className="flex justify-center flex-wrap lg:justify-between">
                {
                    data.map(element => (
                        <Link to={element.url} className="m-2 w-40 flex" key={element.id}>
                            <div className="w-full h-full rounded-xl shadow-lg flex flex-wrap items-center justify-center p-4 bg-white-tone">
                                <img src={element.image} alt="" className="my-5 w-20"/>
                                <p className="font-bold uppercase text-text-dark self-end">{element.name}</p>
                            </div>
                        </Link>        
                    ))
                }
                
            </div>
        </section>
    );
}

export default CardBoxSmall;