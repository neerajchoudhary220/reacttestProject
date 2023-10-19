import React, { useEffect, useState } from "react";
import ProgressiveImg from "../components/ProgressiveImg";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const GetProfile = ({ data, loading }) => {
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(loading);
    }, [loading])
    return (
        <div className="row">
            {isLoading ? (<div className="col-12 d-flex justify-content-center">
                <div className="card">
                    <div className="card-header d-flex">
                        <span className="mr-auto">User Details</span>
                        <button className="btn btn-outline-info btn-sm">Edit</button>
                    </div>
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="mr-auto">
                                <ProgressiveImg img={data?.image?.url} />
                            </div>
                            <div className="d-flex ml-3">
                                <div className="mr-3">
                                    <span>Name</span><br />
                                    <b>{data.name}</b>
                                </div>

                                <div className="mr-3">
                                    <span>Email</span><br />
                                    <b>{data.email}</b>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>) : (
            <div className="col-12 d-flex justify-content-center">
                <div className="card">
                    <div className="card-header">
                        <Skeleton width={'50px'} />
                    </div>
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="mr-auto">
                                <Skeleton height={"100px"} width={"100px"} circle={true} />
                            </div>
                            <div className="d-flex ml-3">
                                
                                    <Skeleton count={2} width={'300px'} />
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>)}




            {/* <div className="col-12">
                    <Skeleton count={5} />
            </div> */}
        </div>

    )
}
export default GetProfile