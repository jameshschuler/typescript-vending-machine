import React, { useEffect, useState } from 'react';
import { InventoryItem } from '../models/InventoryItem';
import { getInventory } from '../service/DataService';

const ItemsView: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    const inventoryData = getInventory();
    setInventory(inventoryData);
  }, []);

  return (
    <div id="items">
      <div className="item-row">
        {inventory &&
          inventory.map((item: InventoryItem, index: number) => {
            return (
              <div className="item" key={item.id}>
                <span className="item-icon">
                  <i className={`fas fa-fw fa-2x ${item.icon}`}></i>
                </span>
                <h5 className="item-name">{item.name}</h5>
                <div className="item-information">
                  <span className="item-code">{item.code}</span>
                  <span>{item.price}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ItemsView;
