import { useState } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'Rahul Pratap Singh',
    email: 'ace.rahulthakur@gmail.com',
    role: 'Full Stack Developer',
    location: 'Jammu & Kashmir, India',
    phone: '9876543210',
    bio: 'A passionate developer building full-stack applications.',
    linkedin: 'https://linkedin.com/in/rahulpratap',
    github: 'https://github.com/IamRahulThakur',
    avatar: 'https://i.pravatar.cc/150?img=3',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(user);
  const [avatarPreview, setAvatarPreview] = useState(user.avatar);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarPreview(imageUrl);
      setEditedData({ ...editedData, avatar: imageUrl }); // Simulated update
    }
  };

  const handleSave = () => {
    setUser(editedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData(user);
    setAvatarPreview(user.avatar);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
          {/* Avatar Section */}
          <div className="relative">
            <img
              src={avatarPreview}
              alt="Avatar"
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-200 shadow"
            />
            {isEditing && (
              <div className="absolute bottom-0 right-0">
                <label className="cursor-pointer bg-blue-600 text-white px-2 py-1 text-xs rounded">
                  Change
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>

          {/* Form Info Section */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              {isEditing ? 'Edit Profile' : 'User Profile'}
            </h2>

            {isEditing ? (
              <form className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" value={editedData.name} onChange={handleChange} placeholder="Name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
                  <input type="email" name="email" value={editedData.email} onChange={handleChange} placeholder="Email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
                  <input type="text" name="role" value={editedData.role} onChange={handleChange} placeholder="Role"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
                  <input type="text" name="location" value={editedData.location} onChange={handleChange} placeholder="Location"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
                  <input type="text" name="phone" value={editedData.phone} onChange={handleChange} placeholder="Phone Number"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
                  <input type="text" name="linkedin" value={editedData.linkedin} onChange={handleChange} placeholder="LinkedIn URL"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
                  <input type="text" name="github" value={editedData.github} onChange={handleChange} placeholder="GitHub URL"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
                </div>

                <textarea name="bio" value={editedData.bio} onChange={handleChange} rows="4" placeholder="About you"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />

                <div className="flex flex-wrap gap-3 pt-2">
                  <button type="button" onClick={handleSave}
                    className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                    Save
                  </button>
                  <button type="button" onClick={handleCancel}
                    className="bg-gray-300 px-5 py-2 rounded-md hover:bg-gray-400 transition">
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Name:</span> {user.name}</p>
                <p><span className="font-semibold">Email:</span> {user.email}</p>
                <p><span className="font-semibold">Role:</span> {user.role}</p>
                <p><span className="font-semibold">Location:</span> {user.location}</p>
                <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                <p><span className="font-semibold">LinkedIn:</span> <a href={user.linkedin} className="text-blue-600 underline" target="_blank" rel="noreferrer">{user.linkedin}</a></p>
                <p><span className="font-semibold">GitHub:</span> <a href={user.github} className="text-blue-600 underline" target="_blank" rel="noreferrer">{user.github}</a></p>
                <p><span className="font-semibold">Bio:</span> {user.bio}</p>

                <button onClick={() => setIsEditing(true)}
                  className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
