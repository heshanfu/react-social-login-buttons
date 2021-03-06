import {Component} from "react"

interface SpecificSocialLoginButtonProps {
  onClick?: () => any
  onMouseEnter?: () => any
  onMouseLeave?: () => any
  
  /** This style will be used when an user hovers above the button. */
  activeStyle?: object

  /** Icon will be used. Can be a react component or a string. If string provided, will render an <i> element, see `iconFormat`. */
  icon?: string|Component|Function

  /** If icon is a string, then will render an <i> element with the classname returned from this function. */
  iconFormat?: (iconName: string) => string

  /** The size of icon e.g. "26px". */
  iconSize?: string

  /** If true, active styles wont apply. You can use your logic and compute custom styles by passing an object to `style` param. */
  preventActiveStyles?: Boolean

  /** Override default button styles. */
  style?: object

  /** Align of the button text. */
  align?: "left" | "center" | "right"

}

declare class SpecificSocialLoginButton extends Component<SpecificSocialLoginButtonProps, any> {}

declare class FacebookLoginButton extends SpecificSocialLoginButton {}
declare class GoogleLoginButton extends SpecificSocialLoginButton {}
declare class GithubLoginButton extends SpecificSocialLoginButton {}
declare class TwitterLoginButton extends SpecificSocialLoginButton {}
declare class AmazonLoginButton extends SpecificSocialLoginButton {}
declare class InstagramLoginButton extends SpecificSocialLoginButton {}
declare class LinkedInLoginButton extends SpecificSocialLoginButton {}
declare class MicrosoftLoginButton extends SpecificSocialLoginButton {}

export {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  TwitterLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton
}