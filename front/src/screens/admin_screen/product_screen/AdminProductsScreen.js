import React, { useState, useRef } from 'react';
import { Panel } from 'primereact/panel';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import ProductDialog from './ProductDialog';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../AdminScreen.css';

const AdminProductsScreen = () => {
  const [displayDialog, setDisplayDialog] = useState(false);
  const toast = useRef(null);
  const navigate = useNavigate();

  const showDialog = () => {
    setDisplayDialog(true);
  };

  const hideDialog = () => {
    setDisplayDialog(false);
  };

  const showToast = (severity, summary, detail) => {
    if (toast.current) {
      toast.current.show({ severity, summary, detail });
    }
  };

  return (
    <Panel header="Product Management" style={{ width: '60%', margin: '20px auto', height: '30%' }}>
      <div className="button-container">
        <Button
          label="Add Product"
          icon="pi pi-plus"
          className="p-button-rounded p-button-text custom-button"
          onClick={showDialog}
        />
        <Button
          label="Products List"
          icon="pi pi-list"
          className="p-button-rounded p-button-text custom-button"
          onClick={() => navigate('/admin/products/list')}
        />
      </div>
      <ProductDialog visible={displayDialog} onHide={hideDialog} showToast={showToast} />
      <Toast ref={toast} />
    </Panel>
  );
};

export default AdminProductsScreen;