# Users Management Dashboard

A modern React application for displaying and managing user data with a clean, responsive UI. This project showcases best practices in component-based architecture, state management, and user experience enhancements like loading spinners and success messages.

## Features
- **Users Table**: Displays paginated user data fetched from an API with a responsive table design.
- **Registration Modal**: A reusable modal with a form for user registration, including password visibility toggle.
- **Loading State**: A custom spinner overlay for indicating data fetching or form submission processes.
- **Success Feedback**: A friendly success message displayed after form submission.
- **Component Reusability**: Modular UI components (`Modal`, `Input`, `Button`, etc.) designed for flexibility and reuse.

## Tech Stack
- **React**: Frontend library for building UI components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Headless UI**: Unstyled, accessible UI components for modals and dialogs.
- **JavaScript**: Core language for logic and state management.

## Project Structure

src/
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── Modal.jsx     # Generic modal component
│   │   ├── Input.jsx     # Reusable input field component
│   │   ├── Button.jsx    # Custom button with variant support
│   │   └── Spinner.jsx   # Loading spinner component
│   ├── forms/            # Form-specific components
│   │   └── RegistrationForm.jsx  # User registration form
│   ├── TableToolbar.jsx  # Toolbar for the users table
│   ├── TableRow.jsx      # Single row in the users table
│   └── UsersTable.jsx    # Main table component for displaying users
├── App.jsx               # Root component with modal and form integration
└── README.md             # Project documentation
