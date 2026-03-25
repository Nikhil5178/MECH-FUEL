<<<<<<< HEAD
# MECH-FUEL
=======
# Mech-Fuel - On-Demand Roadside Assistance Platform

An on-demand fuel delivery and roadside assistance platform that provides emergency support for drivers facing fuel shortages, vehicle breakdowns, and minor mechanical issues.

## 🚀 Features

- **Service Request Flow** - 3-step process to request fuel delivery or mechanical help
- **Real-time GPS Tracking** - Track assistance vehicles as they approach your location
- **User Dashboard** - View service history and manage profile
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Multiple Services** - Fuel delivery, tire changes, battery jump starts, and minor repairs

## 📦 Tech Stack

- **Frontend**: React.js + TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd mech-fuel
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 🌐 Deploy to Netlify

### Option 1: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Option 2: Netlify Dashboard
1. Push code to GitHub/GitLab/Bitbucket
2. Go to https://app.netlify.com
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 3: Manual Deploy
1. Run `npm install && npm run build`
2. Go to https://app.netlify.com/drop
3. Drag and drop the `dist` folder

## 📁 Project Structure

```
mech-fuel/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── Header.tsx   # Navigation header
│   │   │   └── Footer.tsx   # Site footer
│   │   ├── pages/
│   │   │   ├── Home.tsx          # Landing page
│   │   │   ├── RequestService.tsx # Service request form
│   │   │   ├── TrackOrder.tsx     # Real-time tracking
│   │   │   ├── Dashboard.tsx      # User dashboard
│   │   │   ├── About.tsx          # About page
│   │   │   ├── Root.tsx           # Layout wrapper
│   │   │   └── NotFound.tsx       # 404 page
│   │   ├── App.tsx          # Main app component
│   │   └── routes.tsx       # Route configuration
│   └── styles/
│       ├── index.css        # Main styles
│       ├── tailwind.css     # Tailwind imports
│       ├── theme.css        # Theme tokens
│       └── fonts.css        # Font imports
├── netlify.toml             # Netlify configuration
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎯 Key Pages

- **/** - Home/Landing page with features and services
- **/request** - Service request form (3-step process)
- **/track/:orderId** - Real-time order tracking with simulated GPS
- **/dashboard** - User dashboard with service history
- **/about** - Company information and values

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please open an issue in the repository.
>>>>>>> 7038cc3 (first commit)
