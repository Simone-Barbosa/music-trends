import { Button, Checkbox, Modal } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useEffect, useState } from 'react';
import { listOfGenres } from '../../shared/genres';
import { getUserPreferences, setUserPreferences } from '../../shared/local-storage';

interface ModalPreferencesProps {
    open: boolean;
    showButton: boolean;
    modalText: string;
    executaFuncao?: (texto: string)=> void;
}

export default function ModalPreferences({ open, showButton, modalText, executaFuncao }: ModalPreferencesProps) {
    const [isModalOpen, setIsModalOpen] = useState(open);
    const [checkedValues, setCheckedValues] = useState<CheckboxValueType[]>([]);

    useEffect(() => {
        // console.log('alterou o estado para =', isModalOpen);
    }, [isModalOpen]);

    const showModal = () => {
        const userPrefer = getUserPreferences();
        if (userPrefer?.length) {
            setCheckedValues(userPrefer);
        }

        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setUserPreferences(checkedValues);
        // if (window.location.pathname === '/') {
        //     location.reload();
        // }

    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = (checkedValues: CheckboxValueType[]) => {
        setCheckedValues(checkedValues);
    };

    console.log('checked = ', checkedValues);

    return (
        <>
            {showButton && (
                <Button type="primary" onClick={() => showModal()}>
                    Set Preferences
                </Button>
            )}

            <Modal title={modalText} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Checkbox.Group options={listOfGenres} onChange={onChange} defaultValue={checkedValues} />
                <button onClick={()=>{executaFuncao('QUALQUER TEXTO')}}>Executa função </button>
            </Modal>
        </>
    );
}
