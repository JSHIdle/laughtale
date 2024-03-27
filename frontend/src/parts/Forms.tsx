// parts/Forms.tsx
import React from 'react';

interface TextInputProps {
    label: string;
    name: string;
    value: string;
    maxLength: number;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ label, name, value, maxLength, placeholder, onChange }) => {
    return (
        <div className="mb-5 flex">
            <label htmlFor={name} className="block text-sm font-bold text-gray-300 mr-3 flex-none" style={{ width: '10%' }}>{label}</label>
            <div className="relative flex-grow text-white">
                <input
                    type="text"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    className="block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0 pr-10"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <span className="text-gray-500">{value.length}/{maxLength}</span>
                </div>
            </div>
        </div>
    );
};

export const TextArea: React.FC<TextInputProps> = ({ label, name, value, maxLength,placeholder, onChange }) => {
    return (
        <div className="mb-2 flex">
            <label htmlFor={name} className="block text-sm font-bold text-gray-300 mr-3 flex-none" style={{ width: '10%' }}>{label}</label>
            <div className="relative flex-grow text-white">
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    className="block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0 pr-10"
                    style={{ minHeight: '160px' }} // TextArea 높이 설정
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-end text-sm leading-5">
                    <span className="text-gray-500">{value.length}/{maxLength}</span>
                </div>
            </div>
        </div>
    );
};
