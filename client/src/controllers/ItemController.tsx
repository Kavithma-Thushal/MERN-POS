import {useState, useEffect} from "react";
import axios from "axios";

export function ItemController() {
    const baseUrl = "http://localhost:8080/api/v1/item";

    interface Item {
        code: string;
        description: string;
        unitPrice: number;
        qtyOnHand: number;
    }

    useEffect(() => {
        loadAllItems();
    }, []);

    const [itemCode, setItemCode] = useState<string>('');
    const [itemDescription, setItemDescription] = useState<string>('');
    const [itemUnitPrice, setItemUnitPrice] = useState<number>(0);
    const [itemQtyOnHand, setItemQtyOnHand] = useState<number>(0);
    const [items, setItems] = useState<Item[]>([]);

    const saveItem = async () => {
        const itemOb = {
            code: itemCode,
            description: itemDescription,
            unitPrice: itemUnitPrice,
            qtyOnHand: itemQtyOnHand
        };

        try {
            await axios.post(`${baseUrl}/saveItem`, itemOb);
            alert("Item Saved Successfully...!");
            loadAllItems();
            clearItemInputs();
        } catch (err) {
            alert(err);
        }
    };

    // Other functions remain the same...

    const searchItem = async () => {
        try {
            const res = await axios.get(`${baseUrl}/searchItem/${itemCode}`);
            const item = res.data;
            setItemCode(item.code);
            setItemDescription(item.description);
            setItemUnitPrice(item.unitPrice);
            setItemQtyOnHand(item.qtyOnHand);
        } catch (err) {
            alert(err);
        }
    };

    const updateItem = async () => {
        const itemOb = {
            code: itemCode,
            description: itemDescription,
            unitPrice: itemUnitPrice,
            qtyOnHand: itemQtyOnHand
        };

        try {
            await axios.put(`${baseUrl}/updateItem`, itemOb);
            alert("Item Updated Successfully...!");
            loadAllItems();
            clearItemInputs();
        } catch (err) {
            alert(err);
        }
    };

    const deleteItem = async () => {
        try {
            await axios.delete(`${baseUrl}/deleteItem/${itemCode}`);
            alert("Item Deleted Successfully...!");
            loadAllItems();
            clearItemInputs();
        } catch (err) {
            alert(err);
        }
    };

    const loadAllItems = async () => {
        try {
            const res = await axios.get(`${baseUrl}/loadAllItems`);
            setItems(res.data);
        } catch (err) {
            alert(err);
        }
    };

    const clearItemInputs = () => {
        setItemCode('');
        setItemDescription('');
        setItemUnitPrice(0);
        setItemQtyOnHand(0);
    };

    const handleRowClick = (item: Item) => {
        setItemCode(item.code);
        setItemDescription(item.description);
        setItemUnitPrice(item.unitPrice);
        setItemQtyOnHand(item.qtyOnHand);
    };

    return {
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
        handleRowClick,
        clearItemInputs
    };
}