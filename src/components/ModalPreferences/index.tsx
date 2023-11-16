import { Checkbox, Modal } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useState } from "react";
import { listOfGenres } from "../../shared/genres";

interface ModalPreferencesProps {
    open: boolean;
}

export default function ModalPreferences({ open }: ModalPreferencesProps) {
    const [isModalOpen, setIsModalOpen] = useState(open);
    const [checkedValues, setCheckedValues] = useState<CheckboxValueType[]>([]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = (checkedValues: CheckboxValueType[]) => {
        console.log('checked = ', checkedValues);
        setCheckedValues(checkedValues);
    };


    return (
        <>
            <Modal title="Select your favority genres" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Checkbox.Group options={listOfGenres} onChange={onChange} />
            </Modal>

        </>
    );
}
