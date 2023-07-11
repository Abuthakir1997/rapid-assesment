import React, { useCallback, useMemo, useState } from 'react';
import { categories } from '../data/categories';
import { CategorieList } from '../components/categorie-list/categorie-list';

const useCategoriesDataHook = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeIndex, setActiveIndex] = useState(null);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(categories.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleCategories = categories.slice(startIndex, endIndex);
    const toggleSubCategory = useCallback((category, index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Deselect the category
        } else {
            setActiveIndex(index); // Select the clicked category
        }
    }, [activeIndex]);

    const categoryListElement = useMemo(() => {
        return visibleCategories.map((category, index) => {
            const { name, approved, pending, competitorFirst, competitorSecond, subCategory = [] } = category;
            const isActive = activeIndex === index;

            return (
                <React.Fragment key={name}>
                    <div
                        className={`category-list-wrapper ${isActive ? "selected" : ""}`}
                        id={index}
                        key={index}
                        onClick={() => toggleSubCategory(category, index)}
                    >
                        <CategorieList
                            name={name}
                            approved={approved}
                            pending={pending}
                            competitorFirst={competitorFirst}
                            competitorSecond={competitorSecond}
                            hasSubCategory={subCategory}
                        />
                        {subCategory.length && isActive ? (
                            <div className={`sub-categorie-list-container`}>
                                {subCategory.map((subCategoryItem, index) => {
                                    const { name: subCategoryName, approved, pending, competitorFirst, competitorSecond } = subCategoryItem;
                                    return (
                                        <CategorieList
                                            name={subCategoryName}
                                            approved={approved}
                                            pending={pending}
                                            competitorFirst={competitorFirst}
                                            competitorSecond={competitorSecond}
                                            hasSubCategory={[]}
                                            key={index}
                                        />
                                    );
                                })}
                            </div>
                        ) : null}
                    </div>
                </React.Fragment >
            );
        });
    }, [visibleCategories, activeIndex, toggleSubCategory]);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return {
        handlePageChange,
        currentPage,
        totalPages,
        setCurrentPage,
        categoryListElement,
    };
};

export default useCategoriesDataHook;
