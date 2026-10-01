import { useState, type FormEvent } from 'react';
import { Check, AlertCircle, Upload } from 'lucide-react';

export default function CareerForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setFileName(null);
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="mt-4 font-heading text-lg font-semibold text-charcoal">
          Application submitted
        </h3>
        <p className="mt-2 text-sm text-charcoal/60">
          Thank you for your interest in joining Wellshark. We will review your application
          and get in touch if there is a match.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="career-name" className="block text-sm font-medium text-charcoal/70 mb-1.5">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="career-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-cool-300 px-4 py-3 text-sm text-charcoal placeholder-charcoal/30 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="career-contact" className="block text-sm font-medium text-charcoal/70 mb-1.5">
          Phone / Email <span className="text-red-500">*</span>
        </label>
        <input
          id="career-contact"
          name="contact"
          type="text"
          required
          autoComplete="tel"
          className="w-full rounded-lg border border-cool-300 px-4 py-3 text-sm text-charcoal placeholder-charcoal/30 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
          placeholder="Phone number or email address"
        />
      </div>

      <div>
        <label htmlFor="career-message" className="block text-sm font-medium text-charcoal/70 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="career-message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-cool-300 px-4 py-3 text-sm text-charcoal placeholder-charcoal/30 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-y"
          placeholder="Tell us about yourself and your area of interest"
        />
      </div>

      <div>
        <label htmlFor="career-resume" className="block text-sm font-medium text-charcoal/70 mb-1.5">
          Resume / CV
        </label>
        <div className="relative">
          <input
            id="career-resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
          <label
            htmlFor="career-resume"
            className="flex items-center justify-center gap-2 w-full rounded-lg border-2 border-dashed border-cool-300 px-4 py-6 text-sm text-charcoal/50 cursor-pointer hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            <Upload className="h-5 w-5" />
            {fileName ? (
              <span className="font-medium text-charcoal">{fileName}</span>
            ) : (
              'Click to upload your resume (PDF, DOC, DOCX)'
            )}
          </label>
        </div>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center rounded-md bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-800 transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
      </button>


    </form>
  );
}
