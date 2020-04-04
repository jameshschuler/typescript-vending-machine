import React from 'react';

const ItemsView: React.FC = () => {
  return (
    <div id="items">
      <div className="item-row">
        <div className="item">
          <span className="item-icon">
            <i className="fas fa-fw fa-2x fa-air-freshener"></i>
          </span>
          <h5 className="item-name">Air Freshener</h5>
          <div className="item-information">
            <span className="item-code">A0</span>
            <span>$2.00</span>
          </div>
        </div>
        <div className="item">
          <span className="item-icon">
            <i className="fas fa-fw fa-2x fa-apple-alt"></i>
          </span>
          <h5 className="item-name">Apple</h5>
          <div className="item-information">
            <span className="item-code">A1</span>
            <span>$2.50</span>
          </div>
        </div>
        <div className="item">
          <span className="item-icon">
            <i className="fas fa-fw fa-2x fa-beer"></i>
          </span>
          <h5 className="item-name">Beer</h5>
          <div className="item-information">
            <span className="item-code">A2</span>
            <span>$5.50</span>
          </div>
        </div>
        <div className="item">
          <span className="item-icon">
            <i className="fas fa-fw fa-2x fa-bacon"></i>
          </span>
          <h5 className="item-name">Bacon</h5>
          <div className="item-information">
            <span className="item-code">A3</span>
            <span>$0.99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsView;
