import React from 'react';
import s from './Paginator.module.css';
import ReactPaginate from 'react-paginate';

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

    return (
        <ul className={s.paginationContainer}>
            <ReactPaginate
                className={s.reactPaginate}
                breakLabel="..."
                nextLabel="&#10153;"
                onPageChange={() => setCurrentPageHandler(currentPage)}
                pageRangeDisplayed={5}
                pageCount={pagesCount}
                previousLabel="&#129188;"
                renderOnZeroPageCount={null}
                activeLinkClassName={s.activePage}
            />
        </ul>
    );
};
