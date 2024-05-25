import React from 'react';
import { useImmer } from 'use-immer';
import './UserProfileWithImmer.css'; // Import the CSS file

const UserProfileWithImmer = () => {
    const [userProfile, updateUserProfile] = useImmer({
        name: '',
        email: '',
        contactDetails: {
            phone: '',
            address: ''
        },
        preferences: {
            newsletter: false,
            notifications: true
        }
    });

    const updateContactDetails = (field, value) => {
        updateUserProfile(draft => {
            draft.contactDetails[field] = value;
        });
    };

    const toggleNewsletterSubscription = () => {
        updateUserProfile(draft => {
            draft.preferences.newsletter = !draft.preferences.newsletter;
        });
    };

    return (
        <div className="user-profile">
            <h1>User Profile</h1>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={userProfile.name}
                        onChange={e => updateUserProfile(draft => { draft.name = e.target.value })}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        value={userProfile.email}
                        onChange={e => updateUserProfile(draft => { draft.email = e.target.value })}
                    />
                </label>
            </div>
            <div>
                <label>
                    Phone:
                    <input
                        type="text"
                        value={userProfile.contactDetails.phone}
                        onChange={e => updateContactDetails('phone', e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Address:
                    <input
                        type="text"
                        value={userProfile.contactDetails.address}
                        onChange={e => updateContactDetails('address', e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={userProfile.preferences.newsletter}
                        onChange={toggleNewsletterSubscription}
                    />
                    Subscribe to newsletter
                </label>
            </div>
            <div>
                <h2>Current State:</h2>
                <pre>{JSON.stringify(userProfile, null, 2)}</pre>
            </div>
        </div>
    );
};

export default UserProfileWithImmer;
