import React from 'react';
import { Link } from 'react-router-dom';

const Row = ({ children }) => {
    return (<div className="flex gap-2">
        {children}
    </div>)
}

const CardBoxRows = ({ title, moreUrl, data }) => {

    const generateGrid = () => {
        let grid = [];
        let row = [];

        data.forEach((element, index) => {
            row.push(<div>{data[index].title}</div>); 
            if (row.length === 3 || index === data.length - 1) {
                grid.push(<Row>{row}</Row>);
                row = [];
            }
        });

        return grid;
    }

    const getCards = () => {
        return data.map(element => {
            return (
                <div className=" w-30% flex gap-4 min-w-19r my-2">
                    
                    <div className="w-4/12 h-full rounded-xl relative overflow-hidden">
                        <img src={element.image} alt="" className="absolute  w-full"/>
                    </div>
                    <div className="flex flex-col gap-3 w-8/12">
                        <p className="min-w-0 font-bold text-text-dark capitalize overflow-ellipsis whitespace-nowrap overflow-hidden">{element.title}</p>
                        <div className="flex gap-4 text-xs">
                            <span>
                                <i class="far fa-thumbs-up text-secondary mr-2"></i>
                                {element.interactions.likes}
                            </span>
                            <span>
                                <i class="far fa-thumbs-down text-text-light mr-2"></i>
                                {element.interactions.dislikes}
                            </span>
                        </div>

                        <div className="flex justify-between items-center text-xs">
                            <span className="bg-primary-lighter text-primary font-semibold px-2 py-1 rounded uppercase">{element.network}</span>
                            <span><i class="fas fa-clock mr-1"></i> {element.time} pm</span>
                        </div>
                    </div>
                </div>
            );
        });
    }
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
            <div className="flex flex-wrap gap-2 justify-between">
                {getCards()}
            </div>
        </section>
    );
}

export default CardBoxRows;