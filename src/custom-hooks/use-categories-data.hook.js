import React, { useMemo, useState } from 'react';
import { categories } from '../data/categories';
import { CategorieList } from '../components/categorie-list/categorie-list';

const useCategoriesDataHook = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(categories.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleCategories = categories.slice(startIndex, endIndex);
    const showSubCategory = (event) => {
        if (event.target.parentElement.nextSibling.classList.contains('sub-categorie-list-container')) {
            event.target.parentElement.nextSibling.classList.toggle('hide');
        }
    }

    const categoryListElement = useMemo(() => {
        return (
            visibleCategories.map((categorie) => {
                const { name, approved, pending, competitorFirst, competitorSecond, subCategory = [] } = categorie;
                return (
                    <React.Fragment key={name}>
                        <CategorieList name={name}
                            approved={approved}
                            pending={pending}
                            competitorFirst={competitorFirst}
                            competitorSecond={competitorSecond}
                            hasSubCategory={subCategory}
                        />
                        {subCategory.length ? (
                            <>
                                <div className='sub-categorie-list-container hide'>
                                    {subCategory.map((subcategorie) => {
                                        const { name, } = subcategorie;
                                        return <CategorieList name={name}
                                            approved={approved}
                                            pending={pending}
                                            competitorFirst={competitorFirst}
                                            competitorSecond={competitorSecond}
                                            hasSubCategory={subCategory}
                                        />;
                                    })}
                                </div>
                            </>

                        ) : null}
                    </React.Fragment>
                )


            })
        )
    }, [visibleCategories]);



    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return {
        showSubCategory,
        handlePageChange,
        currentPage,
        totalPages,
        setCurrentPage,
        categoryListElement




    }
}

export default useCategoriesDataHook;