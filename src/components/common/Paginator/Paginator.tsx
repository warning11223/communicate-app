import React from 'react';
import s from './Paginator.module.css';

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPageHandler: (index: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            totalUsersCount,
                                                            currentPage,
                                                            pageSize,
                                                            setCurrentPageHandler,
                                                        }) => {

    let usersNumbers: number[] = [];
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        usersNumbers.push(i);
    }

    const pagination = usersNumbers.map((item, index) => {
        return <span
            key={index}
            className={currentPage === index + 1 ? s.activePage : s.page}
            onClick={() => setCurrentPageHandler(index)}
        >{item}</span>
    })

    return (
        <ul className={s.paginationContainer}>
            {pagination}
        </ul>
    );
};
