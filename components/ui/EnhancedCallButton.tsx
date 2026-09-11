import { PhoneCall } from "lucide-react";
import Link from "next/link";
import "./EnhancedCallButton.css";

export function EnhancedCallButton() {
  return (
    <>
      <div className="fcb-wrap">
        <div className="fcb-group">
          {/* Pulse rings */}
          <div className="fcb-ring" aria-hidden="true" />
          <div className="fcb-ring" aria-hidden="true" />

          {/* Button */}
          <Link
            href="tel:+919625598603"
            className="fcb-btn"
            aria-label="Call +91 9625598603"
            title="Call us"
          >
            <PhoneCall />
          </Link>

          {/* Tooltip */}
          <div className="fcb-tooltip" role="tooltip">
            <div className="fcb-tooltip-inner">
              <div className="fcb-tooltip-num">+91 9625-568-603</div>
              <div className="fcb-tooltip-sub">Available now · Tap to call</div>
              <div className="fcb-arrow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
