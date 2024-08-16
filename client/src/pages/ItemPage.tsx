import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemController} from "../controllers/ItemController";

export function ItemPage() {
    const {
        itemCode,
        itemDescription,
        itemUnitPrice,
        itemQtyOnHand,
        items,
        setItemCode,
        setItemDescription,
        setItemUnitPrice,
        setItemQtyOnHand,
        saveItem,
        searchItem,
        updateItem,
        deleteItem,
        loadAllItems,
        handleRowClick
    } = ItemController();

    return (
        <main className="container my-5">
            <h1 className="text-center mb-4 fw-bold">Item Management</h1>

            {/* Item Form */}
            <div className="row justify-content-center">
                <form className="col-12 col-md-8 col-lg-6 shadow-lg p-5">
                    <div className="mb-3">
                        <label htmlFor="itemCode" className="form-label fw-bold">Item Code</label>
                        <input id="itemCode" className="form-control" value={itemCode}
                               onChange={(e) => setItemCode(e.target.value)} type="text"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="itemDescription" className="form-label fw-bold">Item Description</label>
                        <input id="itemDescription" className="form-control" value={itemDescription}
                               onChange={(e) => setItemDescription(e.target.value)} type="text"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="itemUnitPrice" className="form-label fw-bold">Unit Price</label>
                        <input id="itemUnitPrice" className="form-control" value={itemUnitPrice}
                               onChange={(e) => setItemUnitPrice(Number(e.target.value))} type="number"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="itemQtyOnHand" className="form-label fw-bold">Quantity On Hand</label>
                        <input id="itemQtyOnHand" className="form-control" value={itemQtyOnHand}
                               onChange={(e) => setItemQtyOnHand(Number(e.target.value))} type="number"/>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-outline-primary mx-2" type="button" onClick={saveItem}>Save</button>
                        <button className="btn btn-outline-success mx-2" type="button" onClick={searchItem}>Search
                        </button>
                        <button className="btn btn-outline-warning mx-2" type="button" onClick={updateItem}>Update
                        </button>
                        <button className="btn btn-outline-danger mx-2" type="button" onClick={deleteItem}>Delete
                        </button>
                        <button className="btn btn-outline-secondary mx-2" type="button" onClick={loadAllItems}>Load
                            All
                        </button>
                    </div>
                </form>
            </div>

            {/* Item Table */}
            <div className="row justify-content-center mt-5">
                <div className="col-12">
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">Code</th>
                            <th scope="col">Description</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Quantity on Hand</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item) => (
                            <tr key={item.code} onClick={() => handleRowClick(item)}>
                                <td>{item.code}</td>
                                <td>{item.description}</td>
                                <td>{item.unitPrice}</td>
                                <td>{item.qtyOnHand}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}