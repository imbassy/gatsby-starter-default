// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3x4s7P8yWmfzeCC9Kkgod5
// Component: T-Odw-VKLeNbYf
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import { useScreenVariants as useScreenVariantsfjHrDbfqgibjX } from "./PlasmicGlobalVariant__Screen" // plasmic-import: fj_HrDbfqgibjX/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_dark_saa_s_landing_page.module.css" // plasmic-import: 3x4s7P8yWmfzeCC9Kkgod5/projectcss
import * as sty from "./PlasmicDetailAbout.module.css" // plasmic-import: T-Odw-VKLeNbYf/css
import checklistpngN2WzMBpZpjblt from "./images/checklistpng.png" // plasmic-import: N2WzMBp_Zpjblt/picture

export const PlasmicDetailAbout__VariantProps = new Array()

export const PlasmicDetailAbout__ArgProps = new Array()

function PlasmicDetailAbout__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = args
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfjHrDbfqgibjX(),
  })

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__eMqlb)}>
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={{
                src: checklistpngN2WzMBpZpjblt,
                fullWidth: 48,
                fullHeight: 48,
                aspectRatio: undefined,
              }}
            />
          </div>

          <div className={classNames(projectcss.all, sty.column__fiQ3)}>
            <h5
              data-plasmic-name={"h5"}
              data-plasmic-override={overrides.h5}
              className={classNames(
                projectcss.all,
                projectcss.h5,
                projectcss.__wab_text,
                sty.h5
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Lorem ipsum sit amet"
                : "Lorem ipsum sit amet"}
            </h5>

            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "columns", "img", "h5", "text"],
  freeBox: ["freeBox", "columns", "img", "h5", "text"],
  columns: ["columns", "img", "h5", "text"],
  img: ["img"],
  h5: ["h5"],
  text: ["text"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDetailAbout__ArgProps,
          internalVariantPropNames: PlasmicDetailAbout__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicDetailAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicDetailAbout"
  } else {
    func.displayName = `PlasmicDetailAbout.${nodeName}`
  }
  return func
}

export const PlasmicDetailAbout = Object.assign(
  // Top-level PlasmicDetailAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    h5: makeNodeComponent("h5"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicDetailAbout
    internalVariantProps: PlasmicDetailAbout__VariantProps,
    internalArgProps: PlasmicDetailAbout__ArgProps,
  }
)

export default PlasmicDetailAbout
/* prettier-ignore-end */