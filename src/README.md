# Landing Page Builder

A powerful, component-based landing page builder that lets users create custom landing pages by selecting, arranging, and editing predesigned sections. Built with React, TypeScript, and Tailwind CSS.

## Features

- **🎨 Component Library**: Choose from multiple predesigned section types:
  - Hero sections with headlines and CTAs
  - Overview sections with taglines and multi-column layouts
  - Feature grids
  - Testimonials
  - Call-to-action sections
  - Footer sections

- **✏️ Visual Editor**: Edit all text content directly through an intuitive dialog interface
- **🔄 Drag & Reorder**: Easily rearrange sections to create your perfect layout
- **👁️ Live Preview**: Toggle preview mode to see your landing page without edit controls
- **📄 PDF Export**: Export your completed landing page as a PDF document
- **🎭 Figma Integration**: Import and use your own Figma-designed components
- **💡 Smart Buttons**: Buttons automatically hide when they have no text content

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - UI components
- **html2canvas** - Canvas rendering for PDF export
- **jsPDF** - PDF generation
- **Lucide React** - Icons
- **Sonner** - Toast notifications

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/landing-page-builder.git
cd landing-page-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Deployment

### Deploy to Vercel

The easiest way to deploy this project is with [Vercel](https://vercel.com):

#### Option 1: Deploy via GitHub (Recommended)

1. Push your code to GitHub (see instructions above)
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the Vite framework
6. Click "Deploy"

That's it! Vercel will automatically:
- Install dependencies
- Run the build command
- Deploy your site
- Provide you with a live URL

#### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow the prompts to complete deployment.

#### Environment Configuration

No environment variables are required for the basic setup. The `vercel.json` file is already configured with:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing support

### Other Deployment Options

#### Netlify
```bash
# Build command
npm run build

# Publish directory
dist
```

#### GitHub Pages
Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/landing-page-builder"
}
```

Then deploy:
```bash
npm run build
# Use gh-pages or similar to deploy the dist folder
```

## How to Use

### Building a Landing Page

1. **Add Components**: Click on any component in the sidebar to add it to your page
2. **Edit Content**: Hover over a component and click the edit icon to modify text content
3. **Reorder Sections**: Use the up/down arrows to rearrange components
4. **Remove Components**: Click the trash icon to delete a section
5. **Preview**: Toggle preview mode to see your page without edit controls
6. **Export**: Click "Export PDF" to download your landing page as a PDF

### Adding Custom Figma Components

You can integrate your own Figma designs into the builder:

1. **Design in Figma**: Create your component in Figma
2. **Import**: Use Figma Make's import feature to bring your design into the project
3. **Create Component**: 
   - Add a new file in `/components/landing-page-sections/`
   - Make text content editable through props
   - Follow the pattern used in existing sections (e.g., `OverviewSection.tsx`)

4. **Register Component**:
   - Add to `ComponentLibrary.tsx` component list
   - Add to `Canvas.tsx` componentMap
   - Add default content in `App.tsx`
   - Create editor interface in `ComponentEditor.tsx`

Example structure:
```tsx
interface YourSectionProps {
  content: {
    heading: string;
    description: string;
    // ... other editable fields
  };
}

export function YourSection({ content }: YourSectionProps) {
  return (
    <div>
      <h2>{content.heading}</h2>
      <p>{content.description}</p>
    </div>
  );
}
```

## Project Structure

```
├── App.tsx                          # Main application component
├── components/
│   ├── figma/                       # Figma-related utilities
│   │   └── ImageWithFallback.tsx
│   ├── landing-page-builder/        # Core builder components
│   │   ├── Canvas.tsx              # Main canvas area
│   │   ├── ComponentEditor.tsx     # Edit dialog
│   │   └── ComponentLibrary.tsx    # Sidebar component library
│   ├── landing-page-sections/       # Section components
│   │   ├── HeroSection.tsx
│   │   ├── OverviewSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CTASection.tsx
│   │   └── FooterSection.tsx
│   └── ui/                          # shadcn/ui components
├── imports/                         # Figma imports
│   ├── Layout241.tsx
│   └── svg-24evdjslmf.ts
└── styles/
    └── globals.css                  # Tailwind v4 global styles
```

## Key Components

### ComponentLibrary
Sidebar displaying available section types that users can add to their page.

### Canvas
Main editing area where users can preview, reorder, and manage their selected components. Supports both edit and preview modes.

### ComponentEditor
Dialog interface for editing text content within components. Automatically generates appropriate form fields based on component type.

### Section Components
Individual landing page sections (Hero, Overview, Features, etc.) that accept content props and render the designed layout.

## Customization

### Styling
The project uses Tailwind CSS v4. Global styles and design tokens are defined in `/styles/globals.css`.

### Adding New Section Types
1. Create component in `/components/landing-page-sections/`
2. Define content interface with editable fields
3. Register in ComponentLibrary, Canvas, and App
4. Add editor form in ComponentEditor

### Modifying Existing Sections
Edit the respective component file in `/components/landing-page-sections/`. Ensure you maintain the props interface for compatibility with the editor.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Acknowledgments

- Built with [Figma Make](https://www.figma.com)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
