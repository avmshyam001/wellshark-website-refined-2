import { useState, type FormEvent } from 'react';
import { Check, AlertCircle } from 'lucide-react';

interface EnquiryFormProps {
  productName?: string;
  title?: string;
  submitLabel?: string;
}

export default function EnquiryForm({
  productName,
  title = 'Send Enquiry',
  submitLabel = 'Send Enquiry',
}: EnquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="mt-4 font-heading text-lg font-semibold text-charcoal">
          Thank you for your enquiry
        </h3>
        <p className="mt-2 text-sm text-charcoal/60">
          We will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {title && (
        <h3 className="font-heading text-xl font-bold text-navy-900">{title}</h3>
      )}

      {productName && (
        <div>
          <label className="block text-sm font-medium text-charcoal/70 mb-1.5">
            Regarding
          </label>
          <div className="rounded-lg bg-cool-100 px-4 py-3 text-sm font-medium text-navy-900">
            {productName}
          </div>
        </div>
      )}

      <div>
        <label htmlFor="enquiry-name" className="block text-sm font-medium text-charcoal/70 mb-1.5">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="enquiry-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-cool-300 px-4 py-3 text-sm text-charcoal placeholder-charcoal/30 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="enquiry-contact" className="block text-sm font-medium text-charcoal/70 mb-1.5">
          Phone / Email <span className="text-red-500">*</span>
        </label>
        <input
          id="enquiry-contact"
          name="contact"
          type="text"
          required
          autoComplete="tel"
          className="w-full rounded-lg border border-cool-300 px-4 py-3 text-sm text-charcoal placeholder-charcoal/30 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
          placeholder="Phone number or email address"
        />
      </div>

      <div>
        <label htmlFor="enquiry-message" className="block text-sm font-medium text-charcoal/70 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-cool-300 px-4 py-3 text-sm text-charcoal placeholder-charcoal/30 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-y"
          placeholder="Your enquiry"
        />
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
        {status === 'submitting' ? 'Sending...' : submitLabel}
      </button>


    </form>
  );
}
