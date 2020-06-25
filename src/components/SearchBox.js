import React from "react"

function SearchBox(props) {
    return (
        <div class="jumbotron">
            <div class="container">
                <h2 className="text-center">Associate Directory</h2>
                <form>
                    <div className="input-group mb-3">
                
                        <input
                            onChange={props.handleInputChange}
                            value={props.search}
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Search for an Employee"
                        />
                    <div onClick={props.handleFormSubmit} className="input-group-append">
                    <span className="input-group-text">search</span>

                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
  }
  
  export default SearchBox;