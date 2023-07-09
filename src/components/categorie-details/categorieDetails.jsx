import "./categorie-details.scss";
import Pagination from '../pagination/pagination.component';
import useCategoriesDataHook from '../../custom-hooks/use-categories-data.hook';

const CategorieDetails = () => {
    const {
        currentPage,
        totalPages,
        categoryListElement,
        setCurrentPage } = useCategoriesDataHook();


    return (
        <>
            {/* header and sub-header */}
            <div className='categorie-details-container'>
                <div className="categorie-details-container__header">
                    <div className="categorie-details-container__header__category-section">
                        Category
                    </div>
                    <div className="categorie-details-container__header__matches-section">
                        Matches
                    </div>
                    <div className="categorie-details-container__header__non-matches-section">
                        Non-Matches
                    </div>
                </div>
                <div className="categorie-details-container__sub-header">
                    <div className="categorie-details-container__sub-header__first-section">

                    </div>
                    <div className="categorie-details-container__sub-header__matches-section">
                        <div className="categorie-details-container__sub-header__matches-section__approved-section">
                            Approved
                        </div>
                        <div className="categorie-details-container__sub-header__matches-section__pending-section">
                            Pending
                        </div>
                    </div>
                    <div className="categorie-details-container__sub-header__third-section">
                        <div className="categorie-details-container__sub-header__third-section__competitor-first">
                            Competitor
                        </div>
                        <div className="categorie-details-container__sub-header__third-section__competitor-second">
                            Competitor
                        </div>
                    </div>
                </div>
                {/* rendering categories */}
                {categoryListElement}
            </div>
            {/* Pagination section */}
            <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}

export default CategorieDetails;