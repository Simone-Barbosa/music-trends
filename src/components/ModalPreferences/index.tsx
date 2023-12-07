import { Button, Checkbox, Modal } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useEffect, useState } from "react";
import { listOfGenres } from "../../shared/genres";
import { setUserPreferences } from "../../shared/local-storage";

interface ModalPreferencesProps {
    open: boolean;
    showButton: boolean;
    modalText: string;
}

export default function ModalPreferences({ open, showButton, modalText}: ModalPreferencesProps) {
    const [isModalOpen, setIsModalOpen] = useState(open);
    const [checkedValues, setCheckedValues] = useState<CheckboxValueType[]>([]);

    useEffect(()=>{
        // console.log('alterou o estado para =', isModalOpen);
    }, [isModalOpen])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
       setIsModalOpen(false);
       setUserPreferences(checkedValues);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = (checkedValues: CheckboxValueType[]) => {
        setCheckedValues(checkedValues);
    };


    return (
        <>
            {showButton && (
                <Button type="primary" onClick={() => showModal()}>
                    Set Preferences
                </Button>
            )}

            <Modal title={modalText} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Checkbox.Group options={listOfGenres} onChange={onChange} />
            </Modal>
        </>
    );
}
