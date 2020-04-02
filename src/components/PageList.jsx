import React from 'react'
import { connect } from "react-redux";
import { changePage } from "./../redux/action";

const PageList = ({ page, perPage, userData,changePage }) => {

    const length = userData.members.length
    const totalPage = Math.ceil(length / perPage)
    const pageList = [];

    for (let i = page - 1; i >= 0 && i <= page + 2 && i <= totalPage; i++) {
        if (i === page - 1) {
            if (i !== 0) {
                pageList.push(<button key={i} className="btn btn-outline-dark mr-1" onClick={() => changePage(page - 1)}>Previous</button>);
            }
            continue;
        }
        if (i === page + 2) {
            pageList.push(<button key={i} className="btn btn-outline-dark ml-1 " onClick={() => changePage(page + 1)}>Next</button>);
            continue;
        }
        pageList.push(<button key={i} className={`${ page === i ? "btn btn-dark ml-1 mr-1" : "btn btn-outline-dark" }`} onClick={() => changePage(i)}>{i}</button>);
    }

    return (
        <div>
            {pageList}
        </div>
    )
}

// Accessing Data from Store
const mapStateToProps = (state) => ({
    userData: state.userData,
    page: state.page,
    perPage: state.perPage
})

// Dispatching Action
const mapDispatchToProps = dispatch => ({
    changePage: (payload) => dispatch(changePage(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(PageList)