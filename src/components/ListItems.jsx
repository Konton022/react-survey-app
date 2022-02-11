import React from 'react';

const ListItems = ({value}) => {
    return (
        <div>
            <table className='table-auto table w-full'>
                <thead className='table-header-group'>
                    <tr className='table-row'>
                        <th className='table-cell'>name</th>
                        <th className='table-cell'>order</th>
                        <th className='table-cell'>address</th>
                        <th className='table-cell'>provider</th>
                        <th className='table-cell'>once</th>
                        <th className='table-cell'>mounthly</th>
                    </tr>

                </thead>
            </table>
        </div>
    );
}

export default ListItems;
